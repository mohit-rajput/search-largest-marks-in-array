function getStudentsWithMarksMoreThan(){
                let students = [
                    {"roll_no":101,"name":"Ajay","marks":42,"age":20},
                    {"roll_no":102,"name":"Amit","marks":68,"age":21},
                    {"roll_no":103,"name":"Arun","marks":82,"age":18},
                    {"roll_no":104,"name":"Ansh","marks":40,"age":19}
                ];
                let userInput = document.getElementById("marks").value;
                let str = '';
                let result = students.filter(stud => stud.marks >= userInput);
                result.forEach(stud => str = str + '<li>'+"Roll No: " +stud.roll_no+ "; Name: " +stud.name+ "; Marks: " + stud.marks + "; Age: "+stud.age+'</li>');
                return str;
            }
            
            function searchMarks(){
            document.getElementById("output").innerHTML = getStudentsWithMarksMoreThan();
            }