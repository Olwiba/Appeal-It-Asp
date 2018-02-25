using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Appeal.It.Asp.Models;

namespace Appeal.It.Asp.Controllers
{
    public class ContactController : Controller
    {
        // public void SendContactEmail(string user, string message)
        // {
        //     // Your hard-coded email values (where the email will be sent from), this could be
        //     // define in a config file, etc.
        //     var email = "{your-email@domain.com}";
        //     var password = "{your-password}";

        //     // Your target (you may want to ensure that you have a property within your form so that you know
        //     // who to send the email to
        //     string address = "{contact@domain.com}";

        //     // Builds a message and necessary credentials (example using Gmail)
        //     var loginInfo = new NetworkCredential(email, password);
        //     var msg = new MailMessage();
        //     var smtpClient = new SmtpClient("smtp.gmail.com", 587);

        //     // This email will be sent from you
        //     msg.From = new MailAddress(email);
        //     // Your target email address
        //     msg.To.Add(new MailAddress(address));
        //     msg.Subject = $"{user} just filled out the Contact Form!";
        //     // Build the body of your email using the Body property of your message
        //     msg.Body = message;  

        //     // Wires up and send the email
        //     smtpClient.EnableSsl = true;
        //     smtpClient.UseDefaultCredentials = false;
        //     smtpClient.Credentials = loginInfo;
        //     smtpClient.Send(msg);
        // }

        // GET: /about
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string name, string message)
        {    
            //SendContactEmail(name, message);
            return Content("Thanks for contacting us! We'll be in contact with you soon!");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
