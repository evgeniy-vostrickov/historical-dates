import classNames from "classnames";
import './roundContainer.scss'

type TRoundContainer = {
    children: React.ReactNode;
    onClickButton?: (event: React.MouseEvent<HTMLElement>) => void;
    containerClassName?: string;
}

const RoundContainer: React.FC<TRoundContainer> = ({children, onClickButton, containerClassName = ""}) => {
    return (
        <div className={classNames(containerClassName, "round-container")} onClick={(event) => onClickButton && onClickButton(event)}>
            {children}
        </div>
    )
}

export default RoundContainer;
