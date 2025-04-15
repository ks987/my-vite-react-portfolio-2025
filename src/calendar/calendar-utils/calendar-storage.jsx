
export const loadEvents = () => {
    try {
      const data = localStorage.getItem("schedulerEvents");
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error("Failed to load from localStorage:", err);
      return [];
    }
  };
  
  export const saveEvents = (events) => {
    try {
      localStorage.setItem("schedulerEvents", JSON.stringify(events));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }
  };
  