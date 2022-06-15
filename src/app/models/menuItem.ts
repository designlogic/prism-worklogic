export interface MenuItem {
    Name: string;
    Icon?: string;
    Url?: string;
    Children?: MenuItem[];
    IsActive?: boolean;
}