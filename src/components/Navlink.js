import Link from "next/link"
export function NavLink({navName,navClass,navHref}){
  return (<>
      <Link  className={navClass} data-replace={navName} href={navHref}>
          <span>{navName}</span>
      </Link>
 
  </>)
}
