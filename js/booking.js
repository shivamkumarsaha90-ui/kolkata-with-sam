/**
 * Kolkata With Sam - Core Reactive Booking Interface
 * Handles Real-Time Calculations, WhatsApp String Mapping & Mailers
 */

document.addEventListener('DOMContentLoaded', () => {
    BookingEngine.init();
});

const BookingEngine = {
    init() {
        this.form = document.getElementById('mainBookingForm');
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleReservation(e));
        }
    },

    handleReservation(event) {
        event.preventDefault();

        // Structural Extraction of Form Input Vectors
        const name = document.getElementById('bk_name').value.trim();
        const email = document.getElementById('bk_email').value.trim();
        const phone = document.getElementById('bk_phone').value.trim();
        const service = document.getElementById('bk_service').value;
        const date = document.getElementById('bk_date').value;
        const pax = document.getElementById('bk_pax').value;
        const requests = document.getElementById('bk_requests').value.trim();

        if (!name || !email || !date || !service) {
            alert("Please accurately complete all mandatory booking information structural validation fields.");
            return;
        }

        // Construct Data Payloads for Multi-Channel Dispatches
        const outputPayloadString = `
✨ *NEW BOOKING REQUEST VIA WEBSITE* ✨
-----------------------------------------
👤 *Client Name:* ${name}
📧 *Email Channel:* ${email}
📱 *Contact Number:* ${phone}
✈️ *Requested Itinerary:* ${service}
📅 *Target Schedule Date:* ${date}
👥 *Travel Group Headcount:* ${pax} Person(s)
📝 *Custom Specifications:* ${requests ? requests : 'None'}
-----------------------------------------
_Automated Dispatch Node: Kolkata With Sam_`;

        // Direct Execution to Communication Sub-Pipelines
        this.dispatchWhatsApp(outputPayloadString);
        this.dispatchLocalEmailFallback(name, service, date, outputPayloadString);
    },

    dispatchWhatsApp(messageText) {
        const targetNumber = "916204576957"; 
        const sanitizedString = encodeURIComponent(messageText);
        const externalRouteURL = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${sanitizedString}`;
        
        // Spawn New Context Safe Application Thread
        window.open(externalRouteURL, '_blank');
    },

    dispatchLocalEmailFallback(client, serviceTitle, scheduleDate, structuralMessage) {
        const targetInbox = "shivamkumarsaha90@gmail.com";
        const subjectLine = encodeURIComponent(`Premium Booking Manifest: ${client} - ${serviceTitle}`);
        const mailBody = encodeURIComponent(structuralMessage);
        
        const systemMailtoLink = `mailto:${targetInbox}?subject=${subjectLine}&body=${mailBody}`;
        
        // Asynchronous Execution Window Call Fallback
        setTimeout(() => {
            window.location.href = systemMailtoLink;
        }, 800);
    }
};

