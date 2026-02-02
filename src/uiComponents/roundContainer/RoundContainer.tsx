import classNames from "classnames";
import './roundContainer.scss'

type TRoundContainer = {
    children: React.ReactNode;
    containerClassName?: string;
}

const RoundContainer: React.FC<TRoundContainer> = ({children, containerClassName = ""}) => {
    return (
        <div className={classNames(containerClassName, "round-container")}>
            {children}
        </div>
    )
}

export default RoundContainer;
