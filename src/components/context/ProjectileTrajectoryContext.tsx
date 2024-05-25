import React, { ReactNode, createContext, useState, useEffect } from "react";

export const ProjectileTrajectoryContext =
    createContext<ProjectileTrajectoryContextType>(null);

type ProjectileTrajectoryContextType = {
    result: ReactNode | null;
    setResult: (result: ReactNode) => void;
};

function ProjectileTrajectoryProvider({ children }: { children: ReactNode }) {
    const [result, setResult] = useState<ReactNode | null>(<div>Hello</div>);

    return (
        <ProjectileTrajectoryContext.Provider
            value={{
                result,
                setResult,
            }}
        >
            {children}
        </ProjectileTrajectoryContext.Provider>
    );
}
ProjectileTrajectoryContext;
export default ProjectileTrajectoryProvider;
