import { ContactForm } from "../components/ui/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Start a Project
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Fill out
              the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600">studio@protean.com</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Office</h3>
                <p className="text-slate-600">
                  123 Design Street
                  <br />
                  San Moreno, AM 94103
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Social</h3>
                <div className="flex gap-4 text-slate-600">
                  <a href="#" className="hover:text-forest-900">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-forest-900">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-forest-900">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;