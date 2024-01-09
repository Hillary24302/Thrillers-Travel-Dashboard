

export const classnames = (...classes) => {
  let ret = "";

  const length = classes.length;

  for (let i = 0; i < length; i++) {
    if (classes[i]) {
      ret += classes[i] + " ";
    }
  }

  return ret.trimEnd();
};

export const translateStatus = (text) => {
  text = text?.toLowerCase();
  if (text === "successful") {
    return (
      <div
        style={{
          color: "#0F973D",
          background: "#E7F6EC",
          textAlign: 'center',
          padding: "4px",
          borderRadius: "8px",
        }}
      >
        Successful
      </div>
    );
  } else if (text === "pending") {
    return (
      <div
        style={{
          color: "#F3A218",
          background: "#FEF6E7",
          textAlign: 'center',
          padding: "4px",
          borderRadius: "8px",
        }}
      >
        Pending
      </div>
    );
  } else if (text === "failed") {
    return (
      <div
        style={{
          color: "#F3A218",
          background: "#FEF6E7",
          textAlign: 'center',
          padding: "4px",
          borderRadius: "8px",
        }}
      >
        Failed
      </div>
    );
  } else if (text === "active") {
    return (
      <div
      style={{
        color: "#0F973D",
        background: "#E7F6EC",
        textAlign: 'center',
        padding: "4px 10px 4px 10px",
        borderRadius: "8px",
      }}
      >
        Active
      </div>
    );
  } else if (text === "inactive") {
    return (
      <div
      style={{
        color: "#F3A218",
        background: "#FEF6E7",
        textAlign: 'center',
        padding: "4px",
        borderRadius: "8px",
      }}
      >
        Inactive
      </div>
    );
  }
};

export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export const auditAction = (text) => {
  text = text?.toLowerCase();
  if (text === "create") {
    return (
      <div
        sx={{
          color: "#0F973D",
          background: "#E7F6EC",
          textAlign: 'center',
          padding: "4px",
          borderRadius: "8px",
        }}
      >
        Create
      </div>
    );
  } else if (text === "pending") {
    return (
      <div
        sx={{
          color: "#F3A218",
          background: "#FEF6E7",
          textAlign: 'center',
          padding: "4px",
          borderRadius: "8px",
        }}
      >
        Pending
      </div>
    );
  } else if (text === "delete") {
    return (
      <div
        sx={{
          color: "#8D8484",
          background: "#FBF1F1",
          textAlign: 'center',
          padding: "4px",
          borderRadius: "8px",
        }}
      >
        Delete
      </div>
    );
  }
};
