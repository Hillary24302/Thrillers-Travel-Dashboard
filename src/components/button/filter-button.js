import { Button, Checkbox, Dropdown, Typography } from 'antd';
import * as React from "react";
import { SvgFilter } from '../svg-icon';

const items = [
  {
    key: '1',
    label: (
      <Typography>
        Successful
      </Typography>
    ),
  },
  {
    key: '2',
    label: (
      <Typography>
        Pending
      </Typography>
    ),
  },
  {
    key: '3',
    label: (
      <Typography>
        Failed
      </Typography>
    ),
  },
];

const FilterButton = () => {

  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleItemClick = (itemKey) => {
    // Toggle the selection of the item
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemKey)) {
        return prevSelectedItems.filter((key) => key !== itemKey);
      } else {
        return [...prevSelectedItems, itemKey];
      }
    });
  };
  const handleClearSelection = () => {
    // Clear all selected items
    setSelectedItems([]);
  };

  return (
    <>
     <Dropdown
     trigger={['click']}
      menu={{
        items: [
          ...items.map((item) => ({
            ...item,
            label: (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={selectedItems.includes(item.key)}
                  onChange={() => handleItemClick(item.key)}
                  style={{ marginRight: '8px' }}
                />
                {item.label}
              </div>
            ),
          })),
          {
            key: 'clearSelection',
            label: (
              <div style={{ textAlign: 'center', padding: '10px', marginTop: '10px' }}>
                <Button type="link" style={{borderBottom: "2px solid #1677ff", borderRadius: '0px'}} onClick={handleClearSelection}>
                  Clear Selection
                </Button>
              </div>
            ),
          },
        ],
      }}
      placement="bottom"
      arrow
    >
    <Button
      component="label"
      variant="contained"
      icon={<SvgFilter />}
      onClick={(e) => e.preventDefault()}
      style={{
        background: '#fff',
        border: '1px solid #3259DA',
        textTransform: "none",
        color: "#3259DA",
        borderRadius: "6px",
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
      }}
    >
      Filter
    </Button>
    </Dropdown>
    </>
  );
};
export default FilterButton;
