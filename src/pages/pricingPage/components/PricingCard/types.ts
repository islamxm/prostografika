export interface IPricingCard extends React.HTMLProps<HTMLInputElement> {

    price?: number,
    // descrList?: {label: string, lineover?: boolean}[],
    onSelectPlan?: (...args: any[]) => any,
    planLabel?: string

    access_to_educational_materials?: boolean,
    authors_background_templates?: boolean,
    creating_infographics?: boolean,
    delete_background?: boolean,
    design_infographic_templates?: boolean,
    generation?: number,
    generation_of_any_backgrounds?: boolean,
    generation_templates?: number,
    save_in_resolution?: string,
    seven_days_of_access_to_advertising?: boolean,
    template_auto_update?: boolean,
    working_with_saved_images?:boolean
}