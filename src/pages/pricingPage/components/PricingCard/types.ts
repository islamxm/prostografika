export interface IPricingCard extends React.HTMLProps<HTMLInputElement> {
    price?: string,
    descrList?: {label: string, lineover?: boolean}[],
    onSelectPlan?: (...args: any[]) => any
}