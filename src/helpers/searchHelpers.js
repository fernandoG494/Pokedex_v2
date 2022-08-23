export const findEnglishDescription = (entries) => {
    if(entries?.length > 0){
        return entries.find((entry) => entry.language.name === 'en');
    }else{
        return '';
    }
};