
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Mail, Star, Trash, Archive, AlertCircle, Send, File, Inbox } from 'lucide-react';

interface EmailItem {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  starred: boolean;
}

const emails: EmailItem[] = [
  {
    id: 1,
    sender: "LinkedIn",
    subject: "Jobs in your area that match your profile",
    preview: "Check out these new job opportunities that match your skills and experience",
    date: "10:25 AM",
    read: false,
    starred: false,
  },
  {
    id: 2,
    sender: "Twitter",
    subject: "New login to your account",
    preview: "We detected a new login to your account from a new device",
    date: "Yesterday",
    read: true,
    starred: true,
  },
  {
    id: 3,
    sender: "Newsletter",
    subject: "Your weekly digest of tech news",
    preview: "The biggest stories in tech this week, curated just for you",
    date: "Mar 10",
    read: true,
    starred: false,
  },
  {
    id: 4,
    sender: "Product Team",
    subject: "Your trial is about to expire",
    preview: "Your 30-day trial period ends tomorrow. Upgrade now to continue",
    date: "Mar 9",
    read: true,
    starred: false,
  },
  {
    id: 5,
    sender: "Dropbox",
    subject: "Someone shared a document with you",
    preview: "John Doe shared 'Q1 Marketing Strategy' with you",
    date: "Mar 8",
    read: true,
    starred: true,
  }
];

const MailPage: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<EmailItem | null>(null);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Mail</h1>
        <div className="hidden md:flex">
          <Button variant="outline" size="sm" className="mr-2">
            <Mail className="h-4 w-4 mr-2" />
            Compose
          </Button>
        </div>
        <Button variant="default" size="sm" className="md:hidden">
          <Mail className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardContent className="p-3">
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Inbox className="h-4 w-4 mr-2" />
                <span>Inbox</span>
                <span className="ml-auto bg-yahoo-purple text-white text-xs rounded-full px-2">12</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Star className="h-4 w-4 mr-2" />
                <span>Starred</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Send className="h-4 w-4 mr-2" />
                <span>Sent</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <File className="h-4 w-4 mr-2" />
                <span>Drafts</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Spam</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-2">
                <Trash className="h-4 w-4 mr-2" />
                <span>Trash</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Archive className="h-4 w-4 mr-2" />
                <span>Archive</span>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="h-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="starred">Starred</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="h-[calc(100%-40px)]">
              <Card className="h-full">
                <CardContent className="p-0 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="border-r border-gray-200 h-full overflow-y-auto">
                      {emails.map((email) => (
                        <div 
                          key={email.id} 
                          className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                            !email.read ? 'font-medium' : ''
                          } ${selectedEmail?.id === email.id ? 'bg-gray-100' : ''}`}
                          onClick={() => setSelectedEmail(email)}
                        >
                          <div className="flex justify-between mb-1">
                            <span className={!email.read ? 'font-bold' : ''}>{email.sender}</span>
                            <span className="text-xs text-gray-500">{email.date}</span>
                          </div>
                          <div className="text-sm font-medium mb-1">{email.subject}</div>
                          <div className="text-xs text-gray-500 truncate">{email.preview}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-6 h-full overflow-y-auto hidden md:block">
                      {selectedEmail ? (
                        <div>
                          <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2">{selectedEmail.subject}</h2>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                                  {selectedEmail.sender.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-medium">{selectedEmail.sender}</div>
                                  <div className="text-xs text-gray-500">to me</div>
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">{selectedEmail.date}</div>
                            </div>
                          </div>
                          
                          <div className="prose max-w-none">
                            <p>Hello,</p>
                            <p>{selectedEmail.preview}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
                            <p>Best regards,<br />{selectedEmail.sender}</p>
                          </div>
                          
                          <div className="mt-6 flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Mail className="h-4 w-4 mr-2" />
                              Reply
                            </Button>
                            <Button variant="outline" size="sm">
                              <Archive className="h-4 w-4 mr-2" />
                              Archive
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          <div className="text-center">
                            <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                            <p>Select an email to read</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="unread" className="h-[calc(100%-40px)]">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">Unread Emails</h3>
                  <p>Filter applied for unread emails.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="starred" className="h-[calc(100%-40px)]">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">Starred Emails</h3>
                  <p>Filter applied for starred emails.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MailPage;
