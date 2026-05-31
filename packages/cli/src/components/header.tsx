export function Header(){
    return(
        <box justifyContent="center" alignItems="center">
            <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
                <ascii-font font="tiny" text="Numen" color="white"/>
                <ascii-font font="tiny" text=" Code" color="gray"/>
            </box>
        </box>
    )
};