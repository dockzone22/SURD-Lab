import os
import json
import pandas as pd
import numpy as np

def convert_excel_to_json():
    # Get project root directory dynamically relative to this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)

    excel_path = os.path.join(project_root, "data", "publications.xlsx")
    json_out_path = os.path.join(project_root, "data", "publications.json")

    if not os.path.exists(excel_path):
        print(f"Error: 원본 엑셀 파일을 찾을 수 없습니다: {excel_path}")
        return False

    print(f"Reading Excel file: {excel_path}")
    try:
        # Load sheet 'publications' with openpyxl engine
        df = pd.read_excel(excel_path, sheet_name='publications', engine='openpyxl')
    except Exception as e:
        print(f"Error reading Excel sheet: {e}")
        return False

    print(f"Original row count: {len(df)}")

    # 1. Filter: display == 'Y' (case-insensitive strip just in case)
    df['display'] = df['display'].astype(str).str.strip().str.upper()
    df = df[df['display'] == 'Y']

    # 2. Exclude empty rows (where name/title or key columns are completely empty)
    # Filter rows where essential fields like title/authors/year are missing
    df = df.dropna(subset=['title', 'authors', 'year'], how='all')

    # Convert numeric fields properly (year to integer)
    df['year'] = pd.to_numeric(df['year'], errors='coerce')
    df = df.dropna(subset=['year']) # Year is essential
    df['year'] = df['year'].astype(int)

    # 3, 4, 5. Sort: year descending, then sort_order ascending (NaNs placed at the end of the year group)
    # Ensure sort_order is numeric if possible
    df['sort_order'] = pd.to_numeric(df['sort_order'], errors='coerce')
    df = df.sort_values(by=['year', 'sort_order'], ascending=[False, True], na_position='last')

    # 6. Strip leading/trailing whitespaces from string columns
    df = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)

    # Helper function to clean float decimals (e.g., 28.0 -> 28) for volume, issue, pages, etc.
    def clean_floats(val):
        if isinstance(val, float):
            if np.isnan(val):
                return None
            if val.is_integer():
                return int(val)
        return val

    for col in ['volume', 'issue', 'pages']:
        if col in df.columns:
            df[col] = df[col].apply(clean_floats)

    # 7. Uniform handling of empty cells (nan -> None in JSON, which will serialize to null)
    # Replace NaN, NaT, Inf, -Inf with None
    df = df.replace({np.nan: None, np.inf: None, -np.inf: None})

    records = df.to_dict(orient='records')

    # Force integers for floats with .0 decimal part in records to prevent JSON float values (e.g. 28.0 -> 28)
    for record in records:
        for k, v in record.items():
            if isinstance(v, float) and v.is_integer():
                record[k] = int(v)

    # 8. Save JSON ensuring Korean characters are intact (ensure_ascii=False)
    print(f"Filtered & Sorted row count: {len(records)}")
    try:
        with open(json_out_path, 'w', encoding='utf-8') as f:
            json.dump(records, f, ensure_ascii=False, indent=2)
        print(f"Successfully converted and saved JSON: {json_out_path}")
        return True
    except Exception as e:
        print(f"Error saving JSON file: {e}")
        return False

if __name__ == "__main__":
    convert_excel_to_json()
