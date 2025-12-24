import React, { useState } from "react";

export function Tabs({ defaultValue, children, className = "" }) {
    const [active, setActive] = useState(defaultValue);
    // Clone children and inject active, setActive
    return (
        <div className={className}>
            {React.Children.map(children, child => {
                if (!React.isValidElement(child)) return child;
                return React.cloneElement(child, { active, setActive });
            })}
        </div>
    );
}

export function TabsList({ children, className = "", active, setActive }) {
    return (
        <div className={className}>
            {React.Children.map(children, child => {
                if (!React.isValidElement(child)) return child;
                return React.cloneElement(child, { active, setActive });
            })}
        </div>
    );
}

export function TabsTrigger({ value, children, active, setActive, className = "" }) {
    const isActive = active === value;
    return (
        <button
            className={`px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} ${className}`}
            onClick={() => setActive(value)}
            type="button"
        >
            {children}
        </button>
    );
}

export function TabsContent({ value, active, children, className = "" }) {
    if (active !== value) return null;
    return <div className={className}>{children}</div>;
}
