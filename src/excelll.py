import csv


def read_series_from_csv(file_path):
    series_array = []
    with open(file_path, newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            series_name = row[0].strip()
            series_array.append(series_name)
    return series_array


def main():
    file_path = "C:/Users/julio/Desktop/Documentos Tec/tournament/tournament/src/series.csv"  # Replace with the path to your CSV file

    try:
        series_list = read_series_from_csv(file_path)
        print("Series Array:")
        print(series_list)
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    main()
