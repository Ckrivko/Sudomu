function solve() {

    let quickcheckBtn = document.querySelectorAll('tfoot tr td button')[0];
    let clearBtn = document.querySelectorAll('tfoot tr td button')[1];
    let outputEl = document.getElementById('check');


    let rowElements = Array.from(document.querySelectorAll('tbody tr'));


    quickcheckBtn.addEventListener('click', check)
    clearBtn.addEventListener('click', clear);


    let matrix = [];

    function check() {


        rowElements.forEach(el => {

            let currRow = [];

            let childrenElements = Array.from(el.querySelectorAll('td input'));


            childrenElements.forEach(al => {

                currRow.push(Number(al.value));
            })

            matrix.push(currRow);

        });

        //  inside the div with an id "check" must be You solve it! Congratulations!

        let table = document.querySelector('#exercise table');

        if (checkMatrix(matrix)) {


            table.style.border = "2px solid green";
            outputEl.children[0].textContent = 'You solve it! Congratulations!';
            outputEl.children[0].style.color = "green";
        }

        else {

            table.style.border = "2px solid red";
            outputEl.children[0].textContent = 'NOP! You are not done yet...';
            outputEl.children[0].style.color = "red";
        }
    }

    function clear() {
        let table = document.querySelector('#exercise table');
        table.style.border = '';
        outputEl.children[0].textContent = '';

        rowElements.forEach(el => {

            let childrenElements = Array.from(el.querySelectorAll('td input'));

            childrenElements.forEach(al => {

                al.value = '';
            })

        })

    }


    function checkMatrix(matrix) {
        let isValid = true;


        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length - 1; col++) {

                for (let currCol = col + 1; currCol < matrix[row].length; currCol++) {


                    if (matrix[row][col] == matrix[row][currCol]) {
                        isValid = false;

                    }

                }
            }
        }

        for (let col = 0; col < matrix.length; col++) {

            for (let row = 0; row < matrix.length - 1; row++) {

                for (let currRow = row + 1; currRow < matrix.length; currRow++) {

                    
                    if (matrix[row][col] == matrix[currRow][col]) {

                        isValid = false;
                    }

                }

            }


        }

        


        function checkIsItBetween(matrix, isValid) {
            matrix.forEach(el => {

                el.forEach(al => {

                    if (al < 1 || al > 3) {
                        isValid = false;
                    }
                })
            })

            return isValid;

        }

         isValid = checkIsItBetween(matrix, isValid);


        return isValid;

    }

}
