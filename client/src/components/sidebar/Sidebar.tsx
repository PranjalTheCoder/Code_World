import React from "react"
import { useTranslation } from "react-i18next"

function Sidebar() {
    const { t } = useTranslation()
    return (
        <div className="sidebar">
            <h2>{t("sidebar.title")}</h2>
            <ul>
                <li>{t("sidebar.item1")}</li>
                <li>{t("sidebar.item2")}</li>
                <li>{t("sidebar.item3")}</li>
            </ul>
        </div>
    )
}

export default Sidebar
