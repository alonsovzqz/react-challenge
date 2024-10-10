export type IconType = React.ComponentType<React.ComponentProps<'svg'>>
export type Links = { label: string; href: string, icon?: IconType }

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    links?: Links[];
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

type menuItem = {
    icon: IconType,
    title: string,
};

export interface SidebarProps {
    menuItems: menuItem[];
}
