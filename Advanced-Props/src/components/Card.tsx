interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            {children}
        </div>
    );
};