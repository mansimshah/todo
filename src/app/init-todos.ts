export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined ){
            console.log('No Todos found....creating....');
            var todos = [
                {
                    text: 'Todo One'
                },
                {
                    text: 'Todo Two'
                },
                {
                    text: 'Todo Three'
                },
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        } 
        else{
            console.log('Found Todos......');
        }
    }
}