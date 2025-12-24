import { Facebook, Mail, Trophy } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Trophy className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg text-foreground">BPL 2025-26</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Burishwar Primier League - A celebration of cricket, community, and sportsmanship in Bangladesh.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#home" className="hover:text-primary transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#schedule" className="hover:text-primary transition-colors">
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a href="#teams" className="hover:text-primary transition-colors">
                                    Teams
                                </a>
                            </li>
                            <li>
                                <a href="#rules" className="hover:text-primary transition-colors">
                                    Rules
                                </a>
                            </li>
                            <li>
                                <a href="#prizes" className="hover:text-primary transition-colors">
                                    Prizes
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>বুড়িশ্বর, দলসমূহ</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">মোহাম্মদ ছায়েদুল হক</span>
                                <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded sm:ml-2">Software Engineer</span>
                                <span className="sm:ml-2">📞 ০১৮৪৩-৪৮৮৭৯৭</span>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <a
                                    href="https://www.facebook.com/md.sayedul.haque.944626/"
                                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Burishwar Primier League. All rights reserved. | আয়োজনে: বিপিএল পরিচালন কমিটি
                    </p>
                </div>
            </div>
        </footer>
    )
}
