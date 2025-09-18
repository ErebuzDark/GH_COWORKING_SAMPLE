import React from 'react'
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
   <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-4">GH Tower</div>
              <p className="text-gray-400">
                Premium coworking spaces for the modern professional.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +63 2 1234 5678
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  hello@GH Tower.ph
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Locations</h4>
              <div className="space-y-2 text-gray-400">
                <div>Makati CBD</div>
                <div>Bonifacio Global City</div>
                <div>Ortigas Center</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="text-gray-400">
                Stay connected for updates and events
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GH Tower. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
