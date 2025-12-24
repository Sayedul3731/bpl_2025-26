
export function Badge({ children, className = "" }) {
    return (
        <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${className}`}>
            {children}
        </span>
    );
}
