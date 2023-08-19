import pandas as pd
import json

class ExcelObject:
    def __init__(self, name, description, url):
        self.name = name
        self.description = description
        self.url = url
    
    def to_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "url": self.url
        }

def create_objects_from_excel(excel_file):
    df = pd.read_excel(excel_file, skiprows=1, nrows=21)  # Read only 21 rows (excluding the first row)
    objects = []

    for index, row in df.iterrows():
        name = row[0]
        description = row[1]
        url = row[2]
        new_object = ExcelObject(name, description, url)
        objects.append(new_object)

    return objects

if __name__ == "__main__":
    excel_file_path ="C:/Users/julio/Desktop/Documentos Tec/tournament/tournament/src/Series_jc.xlsx"
    excel_objects = create_objects_from_excel(excel_file_path)

    json_data = [obj.to_dict() for obj in excel_objects]

    with open("output1.json", "w") as json_file:
        json.dump(json_data, json_file, indent=4)
