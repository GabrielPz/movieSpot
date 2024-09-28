export interface TableProps{
    label: any[];
    data: any[];
    onNewPagechange: (newPage: string) => void;
    isLoading: boolean;
    totalCount: number;
    onUpdateClicked: (id: string, data: any) => void;
    pageNum: number;
}