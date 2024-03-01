import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class BPOServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String chat = request.getParameter("chat");
        response.setContentType("text/xml");
        
        
        PrintWriter out = response.getWriter();
        String xmlContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
        xmlContent+="<result>";
        if(chat.equals("/q:1"))
            xmlContent+="XpertBPOSolutions offers a comprehensive range of BPO services including customer support, technical support, back-office operations, data entry, virtual assistant services, and more. We specialize in providing tailored solutions to meet the diverse needs of our clients across various industries.";
        else if(chat.equals("/q:2"))
            xmlContent+="At XpertBPOSolutions, we have stringent quality control measures in place at every stage of our processes. We utilize advanced technology, implement rigorous training programs for our staff, and conduct regular performance evaluations to maintain the highest standards of accuracy and quality in our services.";
        else if(chat.equals("/q:3"))
            xmlContent+="Protecting sensitive customer data is a top priority at XpertBPOSolutions. We adhere to strict data security protocols and comply with industry regulations such as GDPR and HIPAA. Our secure infrastructure, encrypted communication channels, and restricted access policies ensure the confidentiality and integrity of our clients' information.";
        else if(chat.equals("/q:4"))
            xmlContent+="Can you provide examples of industries or clients you have worked with in the past?XpertBPOSolutions has a proven track record of serving clients across various industries including healthcare, e-commerce, telecommunications, finance, and more. We have successfully partnered with small startups, mid-sized businesses, and large enterprises to deliver exceptional BPO solutions tailored to their specific needs.";
        else if(chat.equals("/q:5"))
            xmlContent+="Our commitment to excellence, personalized approach, and relentless focus on customer satisfaction set XpertBPOSolutions apart from other BPO providers. We prioritize building long-term partnerships with our clients, offering flexible solutions, and constantly innovating to stay ahead of industry trends. With a dedicated team of experts and cutting-edge technology, we strive to deliver superior value and drive positive outcomes for our clients.";
        else if(chat.equals("/q:6"))
            xmlContent+="Contact us Ph:9XXXXX XXXX9 Email:XXX.XXX.com";
        xmlContent+="</result>";
        out.println(xmlContent);
    }
}
