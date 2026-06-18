from openpyxl import load_workbook

URL_PATH_EXCEL = r'C:\Users\josue\OneDrive - Grupo Minero Bonanza\ROBIOTEC\SMART SORTER\DASHBOARD IA\rendimiento.xlsx'

def read_xlss_excel(archivo):
    wb = load_workbook(archivo)
    #print(wb.sheetnames)
    ws = wb.active
    for row in ws.iter_rows(values_only=True):
        print(row)
    columna_b = [celda.value for celda in ws['B']]
    print(columna_b)

if __name__ == '__main__':
    read_xlss_excel(URL_PATH_EXCEL)