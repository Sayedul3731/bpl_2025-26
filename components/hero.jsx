
"use client"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, Trophy, Users } from "lucide-react"

export function Hero() {
    return (
        <section
            id="home"
            className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24"
        >
            <div className="container mx-auto px-2">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 whitespace-nowrap">
                        বুড়িশ্বর প্রিমিয়ার লীগ (বিপিএল) ২০২৫-২৬
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        Welcome to the 7th Season of Burishwar Primier League Cricket Tournament
                    </p>
                    <div className="relative w-full overflow-x-hidden mb-8 h-12">
                        <motion.div
                            className="absolute left-0 top-0 flex whitespace-nowrap text-lg md:text-xl text-red-700 font-semibold items-center h-12"
                            style={{ willChange: 'transform' }}
                            initial={{ x: '100%' }}
                            animate={{ x: ["100%", "-100%"] }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: 'linear',
                                repeatType: 'loop',
                                delay: 0,
                                type: 'tween',
                            }}
                        >
                            <span className="pr-16 flex items-center">
                                যে কোন তথ্য সংশোধনের জন্য যোগাযোগ করুন - ০১৮৪৩-৪৮৮৭৯৭ (মোহাম্মদ ছায়েদুল হক - সফটওয়্যার ইঞ্জিনিয়ার)
                            </span>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12">
                        <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                            <Trophy className="h-10 w-10 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-lg text-foreground mb-2">6 Teams</h3>
                            <p className="text-sm text-muted-foreground">Competing for glory</p>
                        </Card>
                        <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                            <Calendar className="h-10 w-10 text-accent mx-auto mb-3" />
                            <h3 className="font-bold text-lg text-foreground mb-2">Tournament Format</h3>
                            <p className="text-sm text-muted-foreground">Round-robin + Semifinals + Finals</p>
                        </Card>
                        <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                            <Users className="h-10 w-10 text-secondary mx-auto mb-3" />
                            <h3 className="font-bold text-lg text-foreground mb-2">Community Spirit</h3>
                            <p className="text-sm text-muted-foreground">Bringing cricket lovers together</p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
