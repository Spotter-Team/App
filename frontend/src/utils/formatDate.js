// used for chat list

const formatDate = (isoDate) => {
    const sentDate = new Date(isoDate);
    const currentDate = new Date();

    const sentDateMidnight = new Date(sentDate.getFullYear(), sentDate.getMonth(), sentDate.getDate());
    const currentDateMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    const timeDiffMs = sentDate.getTime() - currentDate.getTime();
    const dayDiff = Math.abs(Math.round(timeDiffMs / (1000 * 60 * 60 * 24)));
    
    const sentDateTime = sentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    
    const sentDateWeekDay = sentDate.toLocaleDateString('en-US', { weekday: 'long' });

    if(dayDiff === 0) {
        return sentDateTime;
    }
    else if(dayDiff === 1) {
        return 'Yesterday';
    }
    else if(dayDiff < 7) {
        return sentDateWeekDay;
    }
    else {
        return sentDate.toISOString().substring(0, 10);
    }
};

export default formatDate;