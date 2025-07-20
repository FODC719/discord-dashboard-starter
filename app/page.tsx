import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DashboardHome() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold">Welcome</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Log in with your Discord account to view and manage your server.
              </p>
              <a href="/api/login">
                <Button className="mt-4">Login with Discord</Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
