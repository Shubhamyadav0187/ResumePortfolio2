import React from "react";
const sharedClass = 'text-muted-foreground'
const EducationItem = ({ logoText, logoAlt, institution, degree, date }) => {
    return (
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <img src={`https://openui.fly.dev/openui/24x24.svg?text=${logoText}`} alt={logoAlt} className="w-10 h-10" />
          <div>
            <h3 className="font-semibold text-accent">{institution}</h3>
            <p className={sharedClass}>{degree}</p>
            <span className={`text-sm ${sharedClass}`}>{date}</span>
          </div>
        </div>
      </div>
    )
  }

export default EducationItem;