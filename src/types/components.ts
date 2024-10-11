import { User } from "./user";

export type IconType = React.ComponentType<React.ComponentProps<'svg'>>
export type Links = {
    label: string,
    href: string,
    icon?: IconType
}
export type MenuItem = {
    icon: IconType,
    title: string,
};
export type Option = { label: string; value: string | number }

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "phantom";
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: Option[];
    variant?: 'primary' | 'secondary' | 'danger';
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    links?: Links[];
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalResults: number;
    onPageChange: (page: number) => void;
}

export interface SidebarProps {
    menuItems: MenuItem[];
}

export interface CollapsibleCardProps {
    user: User;
    handleDeleteUser: () => void;
}
