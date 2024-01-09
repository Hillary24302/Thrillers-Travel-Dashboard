// import { membersRoute } from "../../../router/routes";
import membersRoute from "../../../routes/routes"

const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  };

  export const getMainMenuItems = () => {
    const items = [];
    for (let i = 0; i < membersRoute.length; i++) {
      let item = getItem(
        membersRoute[i].title,
        membersRoute[i].path,
        membersRoute[i].icon
      );
  
      // Check if the item is "Support" or "Settings" and add a top margin
      if (
        membersRoute[i].title === "Support" 
      ) {
        item.style = { marginTop: "60px" };
      }
  
      items.push(item);
    }
    return items;
  };