from openpyxl import load_workbook
import os

URL_PATH_EXCEL = r'rendimiento.xlsx'

def read_xlss_excel(archivo):
    wb = load_workbook(archivo)
    #print(wb.sheetnames)
    ws = wb.active
    for row in ws.iter_rows(values_only=True):
        print(row)
    columna_b = [celda.value for celda in ws['B']]
    print(columna_b)

# Extracción de rutas relativas
def extract_relative_paths():
    url_project = os.path.dirname(os.path.abspath(__file__))
    url_excel = os.path.join(url_project, URL_PATH_EXCEL)
    return url_excel

if __name__ == '__main__':
    url_excel = extract_relative_paths()
    read_xlss_excel(url_excel)