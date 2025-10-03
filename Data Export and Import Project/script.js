document.addEventListener('DOMContentLoaded', function() {
    const csv=document.getElementById("csv");
    const btn=document.getElementById("btn");
    
    csv.addEventListener("change",function(event){
            const file=event.target.files[0];
            const reader=new FileReader();
            reader.onload=function(e){
                const contact=e.target.result;
                const rows=contact.split("\n").map(row=>row.split(","));
                const table=document.getElementById("table");
                table.innerHTML="";
                for(let i=0;i<rows.length;i++){
                    const tr=document.createElement("tr");
                    for(let j=0;j<rows[i].length;j++){
                        let td=document.createElement("td");
                        td.textContent=rows[i][j];
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                }
                csv.style.display = 'none';};
            reader.readAsText(file);
        });

    btn.addEventListener("click",function(){
        const rows=document.querySelectorAll("#table tr");
        let csvContent="";
        for(let i=0;i<rows.length;i++){
            let row=rows[i];
            let rowContent="";
            const col=row.querySelectorAll("td");
            for(let j=0;j<col.length;j++){
                rowContent+=col[j].textContent+",";
            }
            csvContent+=rowContent.slice(0,-1)+"\n"
        }
        const blog=new Blob([csvContent],{type:"text/csv"});
        const url=URL.createObjectURL(blog);
        let a=document.createElement("a");
        a.href=url;
        a.download="export.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    })
});