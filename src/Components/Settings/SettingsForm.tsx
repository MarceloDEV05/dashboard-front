interface SettingsInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value:string) => void;
}

export const SettingsForm = ({ label, placeholder, value, onChange }: SettingsInputProps) => {
    return(
        <form action="">
            <label>
                {label}
                <input type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </form>
    )
}