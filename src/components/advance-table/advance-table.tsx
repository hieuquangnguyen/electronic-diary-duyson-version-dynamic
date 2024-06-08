import MaterialTable, { Column } from "material-table";
import React from "react";

interface IProps {
    columns: Column<any>[];
    initialData: any[];
    editable?: {
        isEditable?: (rowData: any) => boolean;
        isDeletable?: (rowData: any) => boolean;
        onBulkUpdate?: (
            changes: Record<number, { oldData: any; newData: any }>
        ) => Promise<any>;
        onRowAdd?: (newData: any) => Promise<any>;
        onRowUpdate?: (newData: any, oldData?: any) => Promise<any>;
        onRowDelete?: (oldData: any) => Promise<any>;
        editTooltip?: (rowData: any) => string;
        deleteTooltip?: (rowData: any) => string;
        onRowAddCancelled?: (rowData: any) => void;
        onRowUpdateCancelled?: (rowData: any) => void;
        isEditHidden?: (rowData: any) => boolean;
        isDeleteHidden?: (rowData: any) => boolean;
    }
}

export function AdvanceTable(props: IProps) {
    const { columns, initialData, editable } = props;

    return (
        <MaterialTable
            title="Editable Preview"
            columns={columns}
            data={initialData}
            editable={editable}
        />
    )
}


