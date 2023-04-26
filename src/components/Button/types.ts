export interface Props{
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    onClick: ()=> void;
}