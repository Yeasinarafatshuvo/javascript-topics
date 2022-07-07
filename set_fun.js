const languages = [
    'English',
    'Bengali',
    'Arabi',
    'Hindi',
    'English',
    'Arabi',
    'French'
]
//Set is a collection of elements. Set can only contains unique elements.
const setOfLanguage = new Set(languages);
//Set is an iterable object and we can iterate through each elements.
for(const language of setOfLanguage)
{
    console.log(language);
}
