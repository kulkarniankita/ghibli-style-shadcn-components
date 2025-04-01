import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-4 mx-auto w-full max-w-7xl">
        {/* Dashboard Preview Section */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Beautiful Components
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore our extensive collection of pre-built components
            </p>
          </div>

          <div className="mx-auto grid gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Total Revenue</CardTitle>
                <CardDescription>+20.1% from last month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$15,231.89</div>
                <div className="mt-4 h-[60px] w-full" />
              </CardContent>
            </Card>

            {/* Team Card */}
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>SD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Sofia Davis</p>
                        <p className="text-sm text-muted-foreground">
                          m@example.com
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Owner
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/02.png" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Jackson Lee</p>
                        <p className="text-sm text-muted-foreground">
                          p@example.com
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Member
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Card */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Schedule your activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" className="rounded-md border" />
              </CardContent>
            </Card>

            {/* Settings Card */}
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
                        Toggle dark mode theme
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search Card */}
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
                <CardDescription>Find what you need</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex w-full items-center space-x-2">
                  <Input type="email" placeholder="Search anything..." />
                  <Button type="submit">Search</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
