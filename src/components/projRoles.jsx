import { useEffect } from "react";
import { useState } from "react";

function RoleCard(props) {
    const [hover, setHover] = useState({
        hover: false,
        load: false,
    });

    useEffect(() => {
        setHover({
            hover: false,
            load: false,
        });
    }, []);

    function setClass() {
        if (hover.hover) {
            return "shade";
        } else if (hover.load) {
            return "light";
        }
        return "";
    }

    function visibility() {
        if (hover.hover) {
            return "descText fade-in";
        } else if (hover.load) {
            return "descText fade-out";
        }
        return "descText";
    }

    function changeState() {
        if (hover.hover) {
            setHover({
                hover: false,
                load: true,
            });
        } else {
            setHover({
                hover: true,
                load: true,
            });
        }
    }

    return (
        <div>
            <div className="role-card">
                <div className="role-title">
                    <div className="btn-custom page-scroll">
                        {props.data.title}
                    </div>
                </div>
                <div
                    className="roleCard"
                >
                    {props.data.desc}
                </div>
            </div>
        </div>
    );
}

export const ProjRoles = (props) => {
    return (
        <div>
            <div style={{ marginBottom: "5em" }}>
                {/* <div className="project-img">
                    <img src="../img/project_team.png" alt="project" />
                </div> */}
                <h1
                    style={{
                        textAlign: "center",
                        color: "#333",
                        margin: "2em 1em 1em 1em",
                    }}
                >
                    Project roles
                </h1>
                <span className="centerRole">
                    <h3 className="centerRoleInfo">
                        Learn more about each of the 3 roles every project has!
                        Each role has workshops that help students develop
                        production-level code.{" "}
                        <span style={{ color:"#6372ff"}}></span>
                    </h3>
                </span>
                <RoleCard
                    data={props.data.analysisRole}
                    className="roleCard"
                ></RoleCard>
                <RoleCard
                    data={props.data.platformRole}
                    className="roleCard"
                ></RoleCard>
                <RoleCard
                    data={props.data.datavizRole}
                    className="roleCard"
                ></RoleCard>
            </div>
        </div>
    );
};
