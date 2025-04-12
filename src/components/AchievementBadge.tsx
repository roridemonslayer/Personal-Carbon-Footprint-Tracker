import React from 'react';
import { LockIcon } from 'lucide-react';
export function AchievementBadge({
  title,
  description,
  icon: Icon,
  unlocked,
  date,
  progress,
  color
}) {
  return <div className={`relative bg-gray-50 rounded-lg p-4 ${unlocked ? 'border-gray-200' : 'border-dashed'} border-2`}>
      {unlocked ? <>
          <div className={`p-3 rounded-lg inline-block ${color.replace('text-', 'bg-').replace('500', '50')}`}>
            <Icon className={color} size={24} />
          </div>
          <h4 className="font-medium mt-3 mb-1">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="text-xs text-gray-400 mt-2">Unlocked {date}</div>
        </> : <>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] rounded-lg z-10"></div>
          <div className="p-3 rounded-lg inline-block bg-gray-100">
            <Icon className="text-gray-400" size={24} />
          </div>
          <h4 className="font-medium mt-3 mb-1">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="flex items-center mt-2">
            <LockIcon size={12} className="text-gray-400 mr-1" />
            <div className="flex-1">
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-300 rounded-full transition-all duration-500" style={{
              width: `${progress}%`
            }}></div>
              </div>
            </div>
            <span className="text-xs text-gray-400 ml-2">{progress}%</span>
          </div>
        </>}
    </div>;
}