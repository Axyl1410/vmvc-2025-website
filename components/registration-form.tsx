"use client";

import Stepper, { Step } from "@/components/stepper";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type TeamMember = {
  name: string;
  phone: string;
  email: string;
  studentId: string;
  school: string;
};

type RegistrationData = {
  teamName: string;
  leader: TeamMember;
  member2: TeamMember;
};

const REVIEW_STEP = 3;

export function RegistrationForm() {
  const [showDialog, setShowDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationData>({
    teamName: "",
    leader: {
      name: "",
      phone: "",
      email: "",
      studentId: "",
      school: "",
    },
    member2: {
      name: "",
      phone: "",
      email: "",
      studentId: "",
      school: "",
    },
  });

  const handleSubmit = () => {
    setShowDialog(true);
  };

  const handleConfirm = () => {
    // TODO: Handle form submission (e.g., API call)
    // console.log("Form submitted:", formData);
    setShowDialog(false);
    // Reset form or show success message
    // Stay at current step or reset as needed
  };

  const handleDialogCancel = () => {
    setShowDialog(false);
    // Back to previous step (review step)
    setCurrentStep(REVIEW_STEP);
  };

  return (
    <>
      <div
        className="container mx-auto max-w-5xl px-4 pt-8 sm:pt-12 md:pt-16"
        id="register"
      >
        <div className="mb-8 text-center">
          <h2 className="font-bold text-3xl text-white md:text-4xl">
            Đăng Ký Tham Gia
          </h2>
          <p className="mt-2 text-neutral-400">
            Hoàn thành các bước để đăng ký tham gia cuộc thi
          </p>
        </div>

        <Stepper
          backButtonText="Quay lại"
          className="flex min-h-fit flex-1 flex-col items-center justify-center md:min-h-[60vh]"
          currentStep={currentStep}
          nextButtonText="Tiếp tục"
          onFinalStepCompleted={handleSubmit}
          onStepChange={setCurrentStep}
        >
          {/* Step 1: Team Information */}
          <Step>
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-xl">
                Thông Tin Nhóm
              </h3>
              <div className="space-y-2">
                <Label className="text-white" htmlFor="teamName">
                  Tên Nhóm <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="teamName"
                  onChange={(e) =>
                    setFormData({ ...formData, teamName: e.target.value })
                  }
                  placeholder="Nhập tên nhóm của bạn"
                  required
                  type="text"
                  value={formData.teamName}
                />
              </div>
              <p className="text-neutral-400 text-sm">
                Mỗi nhóm gồm 2 thành viên. Hãy đặt tên nhóm thật sáng tạo!
              </p>
            </div>
          </Step>

          {/* Step 2: Team Leader Information */}
          <Step>
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-xl">
                Thông Tin Nhóm Trưởng
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white" htmlFor="leaderName">
                    Họ và Tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="leaderName"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leader: { ...formData.leader, name: e.target.value },
                      })
                    }
                    placeholder="Nguyễn Văn A"
                    required
                    type="text"
                    value={formData.leader.name}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="leaderPhone">
                    Số Điện Thoại <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="leaderPhone"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leader: { ...formData.leader, phone: e.target.value },
                      })
                    }
                    placeholder="0912345678"
                    required
                    type="tel"
                    value={formData.leader.phone}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="leaderEmail">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="leaderEmail"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leader: { ...formData.leader, email: e.target.value },
                      })
                    }
                    placeholder="email@example.com"
                    required
                    type="email"
                    value={formData.leader.email}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="leaderStudentId">
                    Mã Số Sinh Viên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="leaderStudentId"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leader: {
                          ...formData.leader,
                          studentId: e.target.value,
                        },
                      })
                    }
                    placeholder="SV123456"
                    required
                    type="text"
                    value={formData.leader.studentId}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label className="text-white" htmlFor="leaderSchool">
                    Trường <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="leaderSchool"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leader: { ...formData.leader, school: e.target.value },
                      })
                    }
                    placeholder="Cao Đẳng Việt Mỹ"
                    required
                    type="text"
                    value={formData.leader.school}
                  />
                </div>
              </div>
            </div>
          </Step>

          {/* Step 3: Member 2 Information */}
          <Step>
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-xl">
                Thông Tin Thành Viên 2
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white" htmlFor="member2Name">
                    Họ và Tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="member2Name"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        member2: { ...formData.member2, name: e.target.value },
                      })
                    }
                    placeholder="Trần Thị B"
                    required
                    type="text"
                    value={formData.member2.name}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="member2Phone">
                    Số Điện Thoại <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="member2Phone"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        member2: { ...formData.member2, phone: e.target.value },
                      })
                    }
                    placeholder="0987654321"
                    required
                    type="tel"
                    value={formData.member2.phone}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="member2Email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="member2Email"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        member2: { ...formData.member2, email: e.target.value },
                      })
                    }
                    placeholder="email@example.com"
                    required
                    type="email"
                    value={formData.member2.email}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white" htmlFor="member2StudentId">
                    Mã Số Sinh Viên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="member2StudentId"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        member2: {
                          ...formData.member2,
                          studentId: e.target.value,
                        },
                      })
                    }
                    placeholder="SV789012"
                    required
                    type="text"
                    value={formData.member2.studentId}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label className="text-white" htmlFor="member2School">
                    Trường <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="member2School"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        member2: {
                          ...formData.member2,
                          school: e.target.value,
                        },
                      })
                    }
                    placeholder="Cao Đẳng Việt Mỹ"
                    required
                    type="text"
                    value={formData.member2.school}
                  />
                </div>
              </div>
            </div>
          </Step>

          {/* Step 4: Review */}
          <Step>
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-xl">
                Xác Nhận Thông Tin
              </h3>

              <div className="space-y-4 rounded-lg border border-white/20 bg-white/5 p-4">
                <div>
                  <p className="font-semibold text-lime-300 text-sm">
                    Tên Nhóm
                  </p>
                  <p className="text-white">{formData.teamName}</p>
                </div>

                <div className="border-white/10 border-t pt-4">
                  <p className="mb-2 font-semibold text-lime-300 text-sm">
                    Nhóm Trưởng
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-white">
                      <span className="text-neutral-400">Họ tên:</span>{" "}
                      {formData.leader.name}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">SĐT:</span>{" "}
                      {formData.leader.phone}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">Email:</span>{" "}
                      {formData.leader.email}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">MSSV:</span>{" "}
                      {formData.leader.studentId}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">Trường:</span>{" "}
                      {formData.leader.school}
                    </p>
                  </div>
                </div>

                <div className="border-white/10 border-t pt-4">
                  <p className="mb-2 font-semibold text-lime-300 text-sm">
                    Thành Viên 2
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-white">
                      <span className="text-neutral-400">Họ tên:</span>{" "}
                      {formData.member2.name}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">SĐT:</span>{" "}
                      {formData.member2.phone}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">Email:</span>{" "}
                      {formData.member2.email}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">MSSV:</span>{" "}
                      {formData.member2.studentId}
                    </p>
                    <p className="text-white">
                      <span className="text-neutral-400">Trường:</span>{" "}
                      {formData.member2.school}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-neutral-400 text-sm">
                Vui lòng kiểm tra kỹ thông tin trước khi gửi đăng ký.
              </p>
            </div>
          </Step>
        </Stepper>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận đăng ký</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn gửi đăng ký tham gia cuộc thi? Vui lòng kiểm
              tra kỹ thông tin trước khi xác nhận.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDialogCancel}>
              Hủy
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                className="bg-lime-300 text-black hover:bg-lime-200"
                onClick={handleConfirm}
                type="button"
              >
                Xác nhận đăng ký
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
