// icon:chatbox-outline | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function IconChatboxOutline(props: Omit<React.SVGProps<SVGSVGElement> & { colorPath?: string }, "icon">) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" {...props}>
      <path
        fill="none"
        stroke={props.colorPath}
        strokeLinejoin="round"
        strokeWidth={32}
        d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
      />
    </svg>
  );
}

export default IconChatboxOutline;
