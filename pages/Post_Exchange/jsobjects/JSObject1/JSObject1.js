export default {
    Button1onClick() {
        // Check if the locally stored object exists
        const userName = appsmith.store.name;
        
        if (userName === 'Alex Johnson') {
            window.location.href = 'Alex Johnson.json';
        } else if (userName === 'Taylor Kim') {
            window.location.href = 'Taylor Kim.json';
        } else if (userName === 'Jordan Lee') {
            window.location.href = 'Jordan Lee.json';
        } else {
            console.log("Name doesn't match");
					console.log(appsmith.store.name);
        }
    }
}
