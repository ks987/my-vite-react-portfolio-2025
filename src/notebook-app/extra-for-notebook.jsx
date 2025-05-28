
    // // checking if localStorage is working
    // useEffect(() => {
    //     localStorage.setItem("test", "Hello");
    //     console.log("Retrieved:", localStorage.getItem("test"));
    //   }, []);


   


    // // Save notes to localSotrage whenever notes array changes 
    // useEffect(() => {
    //     localStorage.setItem("notebook-notes", JSON.stringify(notes));
    // }, [notes]);



    //      //   checking if app crashes
        
    //         useEffect(() => {
    //             try {
    //                 const storedNotes = JSON.parse(localStorage.getItem("notebook-notes")) ?? [];
    //                 setNotes(storedNotes);
    //             } catch (err) {
    //                 console.error("Failed to load notes from localStorage:", err);
    //                 setNotes([]);
    //             }
    //         }, []);
         
            
    //         // Load notes from localStorage on compoent mount
    //         useEffect(() => {
    //             const storedNotes = JSON.parse(localStorage.getItem("notebook-notes")) ?? [];
    //             setNotes(storedNotes);
    //         }, [setNotes]);
 