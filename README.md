
1. How long did you spend on the coding test? <br/>
 It took me around three days to compelete the test

2. What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.<br/>
 If given time would work on UI and UX.Extra features like sending invoice via email. 
 
3. What was the most useful feature that was added by you in the application? Did you use any existing library for it? If yes, please share the link. Please include a snippet of code that shows how you've used it.<br/>
  Most useful feature was generating pdf of an invoice.I used an existing library react-to-pdf for this. Link:https://www.npmjs.com/package/react-to-pdf.<br/>
  Code snippet : <br/>
  ```
      <Pdf
        targetRef={ref}
        filename={
          props.data.invoiceNumber + "_" + props.data.invoiceDate + ".pdf"
        }
      >
        {({ toPdf }) => (
          <Button onClick={toPdf} variant="contained" color="primary">
            Generate Pdf
          </Button>
        )}
      </Pdf>
 ```
4. How would you track down a performance issue in production? Have you ever had to do this?<br/>
    By using tools like code profilers.Running database trace.Loggers are also very helpful.Many times it is issue with IO and/or database. 
5. List of all the libraries and packages used to complete the assignement <br/>
   reactjs<br/>
   redux<br/>
   react-redux<br/>
   react-router-dom<br/>
   material-Ui<br/>
   react-to-pdf<br/>
   axios<br/>
   enzyme<br/>
   material-table<br/>
   react-google-login<br/>
   
