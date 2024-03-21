export default function Movie({title,showTime,screen,row,seat,imageUrl}){

    return(
        <>
        <div class="card">
            <h5 class="card-header">{title}</h5>
            <img src={imageUrl} width={300} height={300}/>
            <div class="card-body">
               <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class="text-successfont-weight-bold">Title:</td>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <td class="text-successfont-weight-bold">showTime:</td>
                            <td>{showTime}</td>
                        </tr>
                        <tr>
                            <td class="text-successfont-weight-bold">screen:</td>
                            <td>{screen}</td>
                        </tr>
                        <tr>
                           <td class="text-successfont-weight-bold">row:</td>
                            <td class="text-successfont-weight-bold">{row}</td>
                        </tr>
                        <tr>
                            <td class="text-successfont-weight-bold">seat:</td>
                            <td>{seat}</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
        </>
    )
}